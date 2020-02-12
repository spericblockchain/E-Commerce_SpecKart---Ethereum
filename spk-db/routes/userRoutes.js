const express = require('express'),
	ProductData = require('../model/ProductData'),
	userRouter = express.Router(),
	upload = require('../middleware/multer')
router = () => {
	userRouter.get('/view/:id', async (req, res, next) => {
		const id = req.params.id
		const data = await ProductData.findById(req.params.id)
		data.file.forEach(img => {
			img.path = img.path.replace('public/uploads', 'img')
		})
		res.json(data.file)
	})
	return userRouter
}
module.exports = router
