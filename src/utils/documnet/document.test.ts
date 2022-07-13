import { setDocumentTitle } from './document'

test('setDocumentTitle', () => {
  const titles = ['1', '2', 'test', 'test-test']
  titles.forEach(title => {
    setDocumentTitle(title)
    expect(document.title).toBe(title)
  })
})