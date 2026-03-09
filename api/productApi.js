class ProductApi {
    constructor(request){
         this.request = request;
         this.baseUrl = 'https://dummyjson.com';
    }

    async getProduct(id){
        return await this.request.get(`${this.baseUrl}/products/${id}`);
    }

    async createProduct(data){
        return await this.request.post(`${this.baseUrl}/products/add`, {
            data: data
        })
    }

    async updateProduct(id, data){
        return await this.request.put(`${this.baseUrl}/products/${id}`, {
            data: data
        })
    }

    async deleteProduct(id){
        return await this.request.delete(`${this.baseUrl}/products/${id}`);
    }
}

export { ProductApi }