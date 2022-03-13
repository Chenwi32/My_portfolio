import React from 'react'

function product({ product }) {
  return <div>{`This is product n°${product.id}`}</div>
}

export default product

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/products/${params.id}`)
  const product = await res.json()
  return {
    props: { product }
  }
}
