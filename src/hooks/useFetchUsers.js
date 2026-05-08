import { useState } from 'react'
import axios from 'axios';

export const useFetchUsers = () => {
  // const [userList, setUserList] = useState([{ id: 1 }]);
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const onClickFetchUser = () => alert("関数実行");
  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグon、エラーフラグoff
    setIsLoading(true);
    setIsError(false);

    // APIの実行
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(result => {
        const users = result.data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
        // ユーザー一覧Stateを更新
        setUserList(users);
      })
      // エラーの場合はエラーフラグをon
      .catch(() => setIsError(true))
      // 処理完了後はローディングフラグをoff
      .finally(() => setIsLoading(false));
  };

  return { userList, isLoading, isError, onClickFetchUser };
}
