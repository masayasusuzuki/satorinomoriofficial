// 管理者認証情報
const ADMIN_EMAIL = 'suzukimasayasu.mailadress@gmail.com';
const ADMIN_PASSWORD = 'masa0209';

// ログイン状態の確認
function isAdminLoggedIn() {
    return sessionStorage.getItem('adminLoggedIn') === 'true';
}

// ログイン処理
function adminLogin(email, password) {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'admin.html';
        return true;
    }
    return false;
}

// ログアウト処理
function adminLogout() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.href = 'index.html';
} 