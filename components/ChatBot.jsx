import styles from "./styles/ChatBot.module.css"

const ChatBot = () => {
    return (
      <div class= {styles.chat__bot}>
        <div class="bot slide">
          <div class="ifr__header">
            <p>X</p>
          </div>
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/91e0510f-91f4-438f-98fa-ab405bee404a"
          ></iframe>
        </div>
        <i class="fas fa-comment-dots"></i>
      </div>
    )
}

export default ChatBot;
