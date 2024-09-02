import { RpcTransport } from '@solana/rpc-spec';
import { createRpcMessage } from '@solana/rpc-spec-types';

describe('createHttpTransport and `toJson` function', () => {
    let toJson: jest.Mock;
    let fetchSpy: jest.SpyInstance;
    let makeHttpRequest: RpcTransport;
    beforeEach(async () => {
        await jest.isolateModulesAsync(async () => {
            toJson = jest.fn(value => JSON.stringify(value));
            fetchSpy = jest.spyOn(globalThis, 'fetch');
            fetchSpy.mockResolvedValue({ json: () => ({ ok: true }), ok: true });
            const { createHttpTransport } =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                await import('../http-transport');
            makeHttpRequest = createHttpTransport({ toJson, url: 'http://localhost' });
        });
    });
    it('uses the `toJson` function to transform the payload to a JSON string', () => {
        const request = { methodName: 'foo', params: 123 };
        makeHttpRequest(request);
        expect(toJson).toHaveBeenCalledWith(
            expect.objectContaining({
                ...createRpcMessage(request.methodName, request.params),
                id: expect.any(Number),
            }),
            request,
        );
    });
    it('uses passes the JSON string to the fetch API', () => {
        toJson.mockReturnValueOnce('{"someAugmented":"jsonString"}');
        makeHttpRequest({ methodName: 'foo', params: 123 });
        expect(fetchSpy).toHaveBeenCalledWith(
            expect.anything(),
            expect.objectContaining({
                body: '{"someAugmented":"jsonString"}',
            }),
        );
    });
});
