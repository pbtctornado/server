interface Sender {
    web3: any,
    privateKey: string, // this key is used to sign sendEtherToAddress() transaction
}

class Sender {
    constructor(web3, privateKey: string) {
        this.web3 = web3;
        this.privateKey = privateKey;
    }

    sendEtherToAddress = async (address: string) => {
        try {
            const web3 = this.web3;
            console.log('\nSending ether to user...')
            // TODO get better gas and value estimate
            // ETH value estimate to send:  [(current gas price + margin) * gas cost for approve approve transaction]
            let signedTx = await web3.eth.accounts.signTransaction(
                {
                    // nonce: nonce,
                    from: web3.eth.defaultAccount,
                    to: address,
                    value: web3.utils.toHex(web3.utils.toWei('0.000001', 'ether')),
                    gas: web3.utils.toHex(300000),
                },
                this.privateKey
            )

            let result = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
            console.log(result)
        } catch (e) {
            console.log('Error while sending ETH to user')
            console.log(e)
        }
    }

    sendRawTransaction = async (rawTx: string) => {
        try {
            console.log('\nSending approve...')
            let result = await this.web3.eth.sendSignedTransaction(rawTx);
            console.log(result)
        } catch (e) {
            console.log('Error while sending approve() transaction')
            console.log(e)
        }
    }

    sendDeposit = async (retryAttempt: number) => {
        // TODO implement sending deposit transaction through OpenGSN
        // deposit transaction through openGSN often fails, you have to try it multiple times
        // const maxRetryAttempts = 10
        // if (txFail && retryAttempt < 10){ retryAttempt++; try to send again }
    }
}

export { Sender }