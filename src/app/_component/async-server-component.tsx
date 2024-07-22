export default async function AsyncServerComponent()  {
	// 서버에서만 실행됩니다
	// 대신 이 부분은 클라이언트에 완료되면 따로 내려줍니다. dynamic rendering시 오래 걸리는 api를 호출할 때 사용합니다
	// 서버에서는 이 컴포넌트가 들어갈 자리 placeholder만 만들어놓고 클라이언트에서 그 자리에 넣어줍니다
	await new Promise((resolve) => setTimeout(resolve, 3000)); // 3초 이후에 클라이언트에 내려줍니다
	console.log("AsyncServerComponent"); // 서버에서만 실행됩니다
	return <div>AsyncServerComponent</div>;
}
