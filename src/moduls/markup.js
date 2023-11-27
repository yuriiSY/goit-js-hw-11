export function createMarkup(arr) {
  return arr
    .map(obj => {
      return `<div class="photo-card">
        <img src="${obj.webformatURL}" alt="${obj.tags}" loading="lazy" width="320" height="320" />
        <div class="info">
          <p class="info-item"><b>Likes</b>${obj.likes}</p>
          <p class="info-item"><b>Views</b>${obj.views}</p>
          <p class="info-item"><b>Comments</b>${obj.comments}</p>
          <p class="info-item"><b>Downloads</b>${obj.downloads}</p>
        </div>
      </div>`;
    })
    .join('');
}
