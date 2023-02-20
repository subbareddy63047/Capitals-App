import './index.css'

const Countries = props => {
  const {each} = props
  const {capitalDisplayText, id} = each

  return <option value={id}>{capitalDisplayText}</option>
}
export default Countries
