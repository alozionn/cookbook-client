export default function Searchbar() {
  return (
    <input
      type="text"
      placeholder="Find Recipe"
      class="input text-black"
      style={{
        'border-image-source': "url('../../assets/backgrounds/background1.png')",
        'border-image-slice': '7 7 7 7 fill',
        'border-image-width': '10px 10px 10px 10px',
        'border-image-outset': '0px 0px 0px 0px',
        'border-image-repeat': 'repeat repeat',
        'border-style': 'solid',
      }}
    />
  )
}
