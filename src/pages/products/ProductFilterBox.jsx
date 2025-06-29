import React from 'react'

const ProductFilterBox = () => {
    return (
        <div className="product-filter">

            <div className="form-group">
                <input type="radio" name='filter' id='all' />
                <label htmlFor="all">بدون فلتر</label>
            </div>

            <div className="form-group">
                <input type="radio" name='filter' id='laptop' />
                <label htmlFor="laptop">لابتوب</label>
            </div>

            <div className="form-group">
                <input type="radio" name='filter' id='mobile' />
                <label htmlFor="mobile">هاتف</label>
            </div>

        </div>
    )
}

export default ProductFilterBox