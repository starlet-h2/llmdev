import pytest
from authenticator import Authenticator

@pytest.fixture
def auth():
    return Authenticator()

# ユーザー登録：新規ユーザーの登録
def test_register_new_user(auth):
    auth.register("user1", "password1")
    assert "user1" in auth.users
    assert auth.users["user1"] == "password1"

# ユーザー登録：重複ユーザーの登録
def test_register_duplicate_user(auth):
    auth.register("user1", "password1")
    with pytest.raises(ValueError, match="ユーザーは既に存在します"):
        auth.register("user1", "different_password")

# ログイン：正しいユーザー名とパスワードでのログイン成功
def test_login_success(auth):
    auth.register("user1", "password1")
    result = auth.login("user1", "password1")
    assert result == "ログイン成功"

# ログイン：間違ったパスワードでのログイン失敗
def test_login_wrong_password(auth):
    auth.register("user1", "password1")
    with pytest.raises(ValueError, match="ユーザー名またはパスワードが正しくありません"):
        auth.login("user1", "wrong_password")