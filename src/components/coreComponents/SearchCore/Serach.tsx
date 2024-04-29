import { Input } from "../InputCore/Input"


export const Search = () => {


  return (
    < div >
      <img alt="search_loupe" />
      <Input size={30} primary type="text" placeholder="По навзанию или по существу" />
      <img alt="search_qrcode" />
    </div >
  )
}
