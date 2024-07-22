"use client";

import { useEffect, useState } from "react";

export default function ClientComponent() {
  // 클라이언트 컴포넌트 내부에서 실행되는 코드는 서버에서도 실행되고 클라이언트에서도 실행됩니다
  // 그래서 동적으로 바뀌는 부분 빼고는 서버에서 빌드 시 만들고 내려줘서 시간 아끼는게 nextjs입니다

  let [count, setCount] = useState(0); // 서버에서 0으로 초기화되며 hydration 이후에 클라이언트에서 다시 실행되며 메모리에 올라갑니다
  console.log("client component"); // 서버에서 실행되고 클라이언트에 도착하면 한번 더 실행합니다(hydration중에)
  useEffect(() => {
	// effect는 컴포넌트 마운트 (초기 렌더링) 이후에 실행되므로 클라이언트에서만 실행됨
    console.log("client component useEffect");
    setCount(1);
  }, []);

  return <div>ClientComponent {count}</div>;
}
