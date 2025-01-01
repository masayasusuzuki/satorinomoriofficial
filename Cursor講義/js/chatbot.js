// チャットボットの状態管理
let chatWindow;
let chatToggle;
let chatMessages;
let closeButton;
let faqSection;

// Q&Aの定義
const QA_LIST = {
    "さとりの森とは何ですか？": "さとりの森はAI初級者から上級者まで幅広い学習者層が集まるAIビジネスサロンです。実践で活躍するAIエンジニアや開発者による有意義な講義が月に15回以上行われています。",
    "どのようなサービスがありますか？": "講義のテーマは様々で、AIツールの使い方やクリエイティブAIの使い方など初心者向けのものから、業務効率化ツールを作る中級者向けの講座、また、スクレイピングやWebアプリ開発など上級者向けの講義も行われています。",
    "料金プランを教えてください": "月額7,000円（税込）でAI講義やコミュニティにアクセスできます。",
    "参加するにはどうすればいいですか？": "トップページの「さとりの森へ入る」ボタンから入会手続きができます。"
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    initializeChatbot();
});

function initializeChatbot() {
    // DOM要素の取得
    chatWindow = document.createElement('div');
    chatWindow.className = 'chat-window';
    chatWindow.innerHTML = `
        <div class="chat-header">
            <span>よくある質問</span>
            <button class="close-button">×</button>
        </div>
        <div class="chat-body">
            <div class="faq-section">
                <div class="faq-buttons">
                    ${Object.keys(QA_LIST).map(q => `<button class="faq-button">${q}</button>`).join('')}
                </div>
            </div>
            <div class="chat-messages"></div>
        </div>
    `;
    document.body.appendChild(chatWindow);

    // トグルボタンの作成
    chatToggle = document.createElement('button');
    chatToggle.className = 'chat-toggle';
    chatToggle.innerHTML = '<span>よくある質問を見る</span>';
    document.body.appendChild(chatToggle);

    // 要素の取得
    chatMessages = chatWindow.querySelector('.chat-messages');
    closeButton = chatWindow.querySelector('.close-button');
    faqSection = chatWindow.querySelector('.faq-section');

    // イベントリスナーの設定
    setupEventListeners();
    
    // 初期メッセージの表示
    addBotMessage('こんにちは！さとりの森についてよくある質問をご用意しています。下記からお選びください。');
}

function setupEventListeners() {
    // トグルボタンのクリックイベント
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.add('visible');
        chatToggle.classList.add('hidden');
    });

    // 閉じるボタンのクリックイベント
    closeButton.addEventListener('click', () => {
        chatWindow.classList.remove('visible');
        chatToggle.classList.remove('hidden');
    });

    // FAQ ボタンのクリックイベント
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.textContent;
            addUserMessage(question);
            handleFAQ(question);
        });
    });
}

function handleFAQ(question) {
    const answer = QA_LIST[question];
    if (answer) {
        addBotMessage(answer);
    }
}

function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
} 