const style = {
  width: '100px',
  padding: '6px',
  borderRadius: '8px',
};

export const EditButton = ({ isAdmin }) => {
  // isAdminがfalse(管理者でない)のときにボタンを非活性にする
  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
