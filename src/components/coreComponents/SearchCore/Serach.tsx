import { Input } from "../InputCore/Input"

type SearchProps = {
  placeholder?: string
}

export const Search = ({ placeholder }: SearchProps) => {


  return (
    <div>
      <div className="search_form">
        <img alt="search_loupe" />
        <Input size={30} ghost type="text" placeholder={placeholder} />
        <img alt="search_qrcode" />
      </div>
      <span className="search_examples">Например: Бады, Ношпа, Винедрил</span>
    </div >
  )
}
