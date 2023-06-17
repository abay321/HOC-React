import Button from './components/Button'
import "./App.css"

export default function App() {
  
  return (
    <>
      <Button counter={3} option='plus' />
      <Button counter={1} option='minus' />
      <Button counter={2} option='times' />
    </>
  )

}
