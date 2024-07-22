export default function ServerComponent() {
  // 서버에서만 실행됩니다
  // static rendering 시 : 빌드할때 실행되고 그 리턴값이 고정됨
  // dynamic rendering 시 : 클라이언트가 요청할때마다 서버에서 만듭니다

  // 서버컴포넌트의 모든 정보는 클라이언트에서는 고정 값이라 생각하면 됩니다. 그래서 클라이언트에서는 서버컴포넌트를 실행하지 않습니다(hydration되지 않음)
  console.log("ServerComponent"); // 서버에서만 실행됩니다
  return <div>ServerComponent</div>;
}
