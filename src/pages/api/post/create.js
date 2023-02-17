import db from '../../../../libs/db'

export default async function handler(req,res) {
  const create = await db('posts').insert({
        title:'POst title 1',
        content:'Post Content 1',
    })
    res.status(200)
    res.json({
        message: 'Post created successfully'
    })
}