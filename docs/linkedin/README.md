# Sophie Best: LinkedIn content export

Source: https://www.linkedin.com/in/sophiebestai/
Extracted: 2026-10-30, from a logged-in Chrome session.

This folder holds the profile's public content as structured data plus local copies of the images, ready to render on the website.

## Files

| File | Contents |
| --- | --- |
| `profile.json` | Name, headline, location, follower count, company, websites (contact info), About text (full, split into paragraphs), specialisms list, profile photo, banner and company logo |
| `featured.json` | The 9 items in "Featured", in profile order: text, counts, mentions, full-size images (all images in each post, not just the thumbnail) |
| `posts.json` | The 60 most recent items in the activity feed (6 Sep to 30 Oct 2026): text, date, type, images, document pages, video cover, quoted post, counts, mentions |
| `articles.json` + `articles/*.md` | All 5 LinkedIn articles: metadata and excerpt in JSON, full body as Markdown with front matter |
| `videos.json` | 40 video posts from the Videos tab: text, duration, cover image, counts, embed URL |
| `documents.json` | 4 items from the Documents tab, plus the 4 document (carousel) posts in the feed, with page images |
| `images.json` | 159 tiles from the Images tab. 45 have local copies; the rest are older posts (URL only, see caveats) |
| `assets/` | Downloaded images (`profile/`, `posts/`, `documents/`, `video-covers/`, `articles/`). `assets/manifest.json` lists every file and its source |
| `raw/` | Unprocessed captures, kept in case something needs re-parsing |

## Image references

Every image object looks like this:

```json
{ "local": "assets/posts/D4D22AQE..._0.jpg", "alt": "", "width": 480, "height": 316, "linkedinUrl": "https://media.licdn.com/dms/image/v2/..." }
```

- Use `local`. Paths are relative to this folder. To serve them, copy `assets/` into `public/` (or `src/assets/`).
- `linkedinUrl` is for reference only. LinkedIn image URLs only work with a signed query string that expires, and the signature was removed here, so these URLs return 403.
- The file name is the LinkedIn asset ID plus an index (the page number for documents), so the same image always gets the same file name.

## Post types (`posts.json` → `type`)

- `text`: text only
- `image` / `images`: one or more images in `images[]`
- `document`: carousel or PDF. `document.title`, `document.pages`, `document.pageImages[]` (only the pages LinkedIn had loaded: usually 4 to 6 per document)
- `video`: `video.cover` image. Embed or link to the post `url`

`isRepost: true` means Sophie reposted someone else's post (`author` is the original author). `quotedPost` is set when she shared a post with her own commentary on top.

`date` is worked out from LinkedIn's relative labels ("2h", "Oct 28") using 2026-10-30 as the reference date. The original label is kept in `postedLabel`.

## Caveats

- **Not public on the profile:** Experience, Education, Skills and Recommendations. The experience page redirects back to the main profile.
- **Video files:** LinkedIn streams video in chunks (blob/HLS), so there is no plain video file to download. Use the post link, or `videos.json` → `embedUrl` (LinkedIn's embed iframe; check it before relying on it).
- **Posts:** Only the 60 most recent feed items were captured. The Images tab goes further back; 114 of its tiles have no local copy and their LinkedIn URLs no longer work. Older posts can be added in another pass if needed.
- **Comments tab:** Not captured (it holds Sophie's comments on other people's posts, not her own content).
- **Counts:** Reactions, comments and reposts are as of the extraction date.
- **Mentions:** `mentions[]` are LinkedIn profile, company and school URLs tagged in each post.
