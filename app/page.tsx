import Image from "next/image";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-8">
      <h1 className="text-4xl font-bold">コマンドメモ</h1>
      <Stack 
        direction="row" 
        spacing={{ xs: 1, sm: 2 }} 
        alignItems="center" 
        justifyContent="center"
        useFlexGap
        sx={{ flexWrap: 'wrap' }}
      >
        <Button variant="outlined">新規登録</Button>
        <Button variant="outlined">ログイン</Button>
      </Stack>
      <Button variant="outlined" href="/command">ダッシュボード</Button>
    </div>
  );
}

