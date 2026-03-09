import { test, expect } from '@playwright/test';
import { ProductApi } from '../../api/productApi';

test.describe('Product API', () => {
    test('Create product', async ({ request }) => {
        const productApi = new ProductApi(request)
        const response = await productApi.createProduct({
            title: 'Macbook Pro'
        })

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.title).toBe('Macbook Pro');
    })

    test('Get product', async ({ request }) => {
        const productApi = new ProductApi(request);
        const response = await productApi.getProduct(1);

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.id).toBe(1);
    })

    test('Update product', async ({ request }) => {
        const productApi = new ProductApi(request);
        const response = await productApi.updateProduct(1, {
            title: 'Ipad Air'
        })

        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.title).toBe('Ipad Air');
    })

    test('Delete product', async ({ request }) => {
        const productApi = new ProductApi(request);
        const response = await productApi.deleteProduct(1);

        expect(response.status()).toBe(200);
    })

    test('API chaining flow', async ({ request }) => {
        const productApi = new ProductApi(request);

        //create product
        const createResponse = await productApi.createProduct({
            title: 'Apple Airpods 4'
        })

        expect(createResponse.status()).toBe(201);

        const createBody = await createResponse.json();
        //const productId = createBody.id;
        const productId = 1;
        
        //get product
        const getResponse = await productApi.getProduct(productId);

        expect(getResponse.status()).toBe(200);

        const getBody = await getResponse.json();
        expect(getBody.id).toBe(productId);

        //update product
        const updateResponse = await productApi.updateProduct(productId, {
            title: 'Updated Product'
        });

        expect(updateResponse.status()).toBe(200);

        const updateBody = await updateResponse.json();
        expect(updateBody.title).toBe('Updated Product');

        //delete product
        const deleteResponse = await productApi.deleteProduct(productId);

        expect(deleteResponse.status()).toBe(200);
    })
})