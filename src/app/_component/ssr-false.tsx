export default function SsrFalse() {
  // 여기서부터는 모든걸 브라우저에서 만듭니다. static, dynamic rendering과 상관없이

  // 이전과 달리 서버에서 실행되지 않아 react처럼 이 하위 컴포넌트는 csr로 동작합니다.
  console.log("ssrfalse"); // 클라이언트에서만 실행됩니다
  return <div>ssrfalse</div>;
}
