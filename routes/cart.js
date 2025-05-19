// routes/cart.js
const express = require('express');
const router = express.Router();
const sql = require('mssql');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware kiểm tra token

router.post('/add', authMiddleware, async (req, res) => {
    const { productId, color, size, quantity = 1, userId } = req.body;

    if (!productId || !color || !size || !userId) {
        return res.status(400).json({ message: 'Thiếu thông tin sản phẩm.' });
    }

    try {
        const pool = await sql.connect();
        await pool.request()
            .input('UserId', sql.Int, userId)
            .input('ProductId', sql.Int, productId)
            .input('Color', sql.NVarChar, color)
            .input('Size', sql.NVarChar, size)
            .input('Quantity', sql.Int, quantity)
            .query(`
                INSERT INTO CartItems (UserId, ProductId, Color, Size, Quantity)
                VALUES (@UserId, @ProductId, @Color, @Size, @Quantity)
            `);

        res.status(200).json({ message: 'Đã thêm vào giỏ hàng.' });
    } catch (err) {
        console.error('SQL Error:', err);
        res.status(500).json({ message: 'Lỗi khi thêm vào giỏ hàng.' });
    }
});

module.exports = router;
