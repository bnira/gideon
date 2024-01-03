import Image from 'next/image'
import PostList from './components/postList'
export default function Home() {
  const postArr = [
    {
      title: "Young politician beats vets",
      author: "Ondieki",
      date: "1/3/2024",
      content: "The quick brown fox jumped over the lazy dog",
    },
    {
      title: "Elections postponed",
      author: "Ondieki",
      date: "1/5/2024",
      content: "abradacadabra skili bop bop ye yes"
    }
  ]
  return (
    <div>
      <PostList posts={postArr} />
    </div>
  )
}