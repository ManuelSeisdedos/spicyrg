import axios from 'axios'

function ReCaptcha () {

    const apiKey='6LfMLBYqAAAAAMNrH9N4zHQYHuBQuLIG23-nDjU1'

    const sendCaptcha = async() => {
        try {
            const resCaptcha = await axios
            .post(`https://recaptchaenterprise.googleapis.com/v1/projects/bombaydevs-1721762317184/assessments?key=${apiKey}`,
                {
                    "event": {
                        "token": "TOKEN",
                        "expectedAction": "USER_ACTION",
                        "siteKey": "6LfMLBYqAAAAAJVeqkj-lcU3CYkOTslxvjSatOru",
                    }
                }
            )
            console.log(resCaptcha);
        } catch (error) {
            console.log(error);
            
        }
    }

    return (            
        <form action="" method="POST">
            <div className="g-recaptcha" data-sitekey="6LfMLBYqAAAAAJVeqkj-lcU3CYkOTslxvjSatOru" data-action="LOGIN"></div>
            <input type="submit" value="Submit" onClick={ () => sendCaptcha()} />
        </form>
        )
    }

export default ReCaptcha;