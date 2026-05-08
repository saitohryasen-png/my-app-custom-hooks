// import { useState } from 'react';
import './App.css';
// import axios from 'axios';
import { useFetchUsers } from './hooks/useFetchUsers';

export function App() {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  // ユーザー取得ボタン押下アクション
  // const onClickFetchUser = () => {
  //   // ボタン押下時にローディングフラグon、エラーフラグoff
  //   setIsLoading(true);
  //   setIsError(false);

  //   // APIの実行
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(result => {
  //       const users = result.data.map(user => ({
  //         id: user.id,
  //         name: user.name,
  //         email: user.email,ls
  //       }));
  //       // ユーザー一覧Stateを更新
  //       setUserList(users);
  //     })
  //      // エラーの場合はエラーフラグをon
  //     .catch(() => setIsError(true))
  //      // 処理完了後はローディングフラグをoff
  //     .finally(() => setIsLoading(false));
  // };

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (<p>データ取得中です</p>
      ) : (
        userList.map(user => (
          <p key={user.id}>{`${user.id} : ${user.name} (${user.email})`}</p>
        ))
      )}
    </div>
  );
}
