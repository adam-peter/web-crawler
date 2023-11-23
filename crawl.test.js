import { normalizeUrl, getURLsFromHTML } from "./crawl";

test("normalizes a full url", () => {
  expect(normalizeUrl("https://blog.boot.dev/path/")).toBe(
    "blog.boot.dev/path"
  );
});

test("normalizes a full url 2", () => {
  expect(normalizeUrl("https://blog.boot.dev/path")).toBe("blog.boot.dev/path");
});

test("normalizes a full url 3", () => {
  expect(normalizeUrl("http://blog.boot.dev/path/")).toBe("blog.boot.dev/path");
});

test("normalizes a full url", () => {
  expect(normalizeUrl("http://blog.boot.dev/path")).toBe("blog.boot.dev/path");
});

test("find 2 links", () => {
  expect(
    getURLsFromHTML(`
    <div>
      <a href="https://boot.dev">Learn Backend Development</a>
      <a href="https://youtube.com">Learn Backend Development</a>
    </div>
    `)
  ).toEqual(["https://boot.dev", "https://youtube.com"]);
});
