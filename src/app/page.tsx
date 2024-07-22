import AsyncServerComponent from "@/app/_component/async-server-component";
import ClientComponent from "@/app/_component/client-component";
import ServerComponent from "@/app/_component/server-component";
import dynamic from "next/dynamic";
const SsrFalse = dynamic(() => import("@/app/_component/ssr-false"), {
  ssr: false,
});

export default function Home() {
  // dynamic rendering : DB조회같이 동적인 값을 서버에서 조회하고 싶을 때 사용
  // static rendering : 빌드할때 실행되고 다시 그 페이지를 렌더링 하지 않을 때 사용

  return (
    <>
      <ServerComponent />
      <ClientComponent />
      <SsrFalse />
      <AsyncServerComponent />
    </>
  );
}
