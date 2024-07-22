import AsyncServerComponent from "@/app/_component/async-server-component";
import ClientComponent from "@/app/_component/client-component";
import ServerComponent from "@/app/_component/server-component";
import dynamic from "next/dynamic";
const SsrFalse = dynamic(() => import("@/app/_component/ssr-false"), {
  ssr: false,
});

export default function Home() {
  // dynamic rendering : DB조회같이 동적인 값을 서버에서 조회하고 싶을 때 사용합니다
  // 클라이언트가 연결 요청 시 서버에서 만들어서 내려줍니다
  // static rendering(기본값) : 빌드할때 실행되고 다시 그 페이지를 렌더링 하지 않을 때 사용
  // 빌드 시 서버에서 만들어 정적 html로 만들어 두고 클라이언트가 요청할 때 내려줍니다

  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <SsrFalse />
      <AsyncServerComponent />
    </>
  );
}
