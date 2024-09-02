import { RpcTransport } from '@solana/rpc-spec';

describe('createHttpTransport and `fromJson` function', () => {
    let fromJson: jest.Mock;
    let fetchSpy: jest.SpyInstance;
    let makeHttpRequest: RpcTransport;
    beforeEach(async () => {
        await jest.isolateModulesAsync(async () => {
            fromJson = jest.fn();
            fetchSpy = jest.spyOn(globalThis, 'fetch');
            fetchSpy.mockResolvedValue({ ok: true, text: () => '{"ok":true}' });
            const { createHttpTransport } =
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                await import('../http-transport');
            makeHttpRequest = createHttpTransport({ fromJson, url: 'http://localhost' });
        });
    });
    it('uses the `fromJson` function to parse the response from a JSON string', async () => {
        expect.assertions(1);
        const request = { methodName: 'foo', params: 123 };
        await makeHttpRequest(request);
        expect(fromJson).toHaveBeenCalledWith('{"ok":true}', request);
    });
    it('returns the value parsed by `fromJson`', async () => {
        expect.assertions(1);
        const request = { methodName: 'foo', params: 123 };
        fromJson.mockReturnValueOnce({ result: 456 });
        await expect(makeHttpRequest(request)).resolves.toEqual({ result: 456 });
    });
});
