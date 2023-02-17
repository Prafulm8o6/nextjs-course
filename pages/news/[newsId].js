import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  const newId = router.query.newsId;
  return <>The Detail Page</>;
}

export default DetailPage;
