import Notiflix from 'notiflix';
import { createMarkup } from './moduls/markup';
import { fetchData } from './moduls/connectApi';

const gallery = document.querySelector('.gallery');
const button = document.querySelector('.load-more');
const form = document.querySelector('.search-form');

let page = 1;
let query = '';

button.addEventListener('click', loadmore);

function loadmore() {
  page += 1;
  fetchData(query, page)
    .then(responce => {
      gallery.insertAdjacentHTML('beforeend', createMarkup(responce.data.hits));
      if (responce.data.totalHits <= gallery.childElementCount) {
        button.classList.toggle('hidden');
        Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
      }
    })
    .catch(() =>
      Notiflix.Notify.failure(
        "We're sorry, but you've reached the end of search results."
      )
    );
}

form.addEventListener('submit', onSubmit);

function onSubmit(evnt) {
  evnt.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  query = evnt.currentTarget.elements.searchQuery.value;
  fetchData(query, page)
    .then(responce => {
      console.log(responce);
      gallery.innerHTML = createMarkup(responce.data.hits);
      button.classList.toggle('hidden');
    })
    .catch(() => {
      button.classList.add('hidden');
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    });
}
