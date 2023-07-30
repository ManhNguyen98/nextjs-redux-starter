'use client'

const DetailPageId = ({ params }: { params: { id: string } }) => {
  const { id } = params
  return <div>{`DetailPage ${id}`}</div>
}

export default DetailPageId
