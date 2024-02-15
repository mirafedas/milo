import { expect } from '@esm-bundle/chai';
import { parseUrl } from '../../../libs/features/personalization/personalization.js';
import { defineDelayedModalParams, decorateDelayedModalAnchor, initDelayedModal } from '../../../libs/blocks/modal/modal.js';
import { delay, waitForElement } from '../../helpers/waitfor.js';

const DELAYED_MODAL_DISPLAY_MODE = {
  oncePerPageLoad: 'pageload',
  oncePerSession: 'session',
};
const hash = '#dm';

it('parses URL properly', () => {
  expect(parseUrl()).to.deep.equal({});
  expect(parseUrl('https://www.adobe.com/')).to.deep.equal({
    hash: '',
    href: '/',
    pathname: '/',
    search: '',
  });
  expect(parseUrl('https://www.adobe.com/testpage/?delay=1&display=pageload#dm')).to.deep.equal({
    hash,
    href: '/testpage/?delay=1&display=pageload#dm',
    pathname: '/testpage/',
    search: '?delay=1&display=pageload',
  });
});

it('takes the delayed modal parameters from the URL', () => {
  expect(defineDelayedModalParams()).to.deep.equal({});
  expect(defineDelayedModalParams('?delay=invalid&display=invalid')).to.be.undefined;
  expect(defineDelayedModalParams('?delay=1&display=pageload')).to.deep.equal({
    delay: '1',
    displayMode: 'pageload',
    DELAYED_MODAL_DISPLAY_MODE,
  });
});

it('add proper attributes and class names to the link', () => {
  const a = document.createElement('a');
  decorateDelayedModalAnchor({
    a,
    hash,
    pathname: '/testpage/',
  });
  expect(a.getAttribute('href')).to.equal(hash);
  expect(a.getAttribute('data-modal-hash')).to.equal(hash);
  expect(a.getAttribute('data-modal-path')).to.equal('/testpage/');
  expect(a.getAttribute('style')).to.equal('display: none');
  expect(a.classList.contains('modal')).to.be.true;
  expect(a.classList.contains('link-block')).to.be.true;
  a.remove();
});

it('creates and opens the delayed modal', async () => {
  const a = document.createElement('a');
  decorateDelayedModalAnchor({
    a,
    hash,
    pathname: '/testpage',
  });
  document.body.appendChild(a);
  initDelayedModal({
    a,
    delay: '1',
    displayMode: 'pageload',
    hash,
    contentUrl: '/testpage',
    DELAYED_MODAL_DISPLAY_MODE,
  });
  const delayedModal = await waitForElement(hash);
  const modalStylesLink = window.document.head.querySelector('link[href="undefined/blocks/modal/modal.css"]');
  expect(delayedModal).to.exist;
  expect(modalStylesLink).to.exist;
  delayedModal.remove();
  modalStylesLink.remove();
  a.remove();
});

it('does not open a delayed modal if it should be displayed once per session and was already displayed', async () => {
  const a = document.createElement('a');
  window.sessionStorage.removeItem('wasDelayedModalShown');
  decorateDelayedModalAnchor({
    a,
    hash,
    pathname: '/testpage',
  });
  document.body.appendChild(a);
  initDelayedModal({
    a,
    delay: '1',
    displayMode: 'session',
    hash,
    contentUrl: '/testpage',
    DELAYED_MODAL_DISPLAY_MODE,
  });
  const delayedModal = await waitForElement(hash);
  expect(delayedModal).to.exist;
  delayedModal.remove();
  const modalStylesLink = window.document.head.querySelector('link[href="undefined/blocks/modal/modal.css"]');
  modalStylesLink.remove();

  initDelayedModal({
    a,
    delay: '1',
    displayMode: 'session',
    hash,
    contentUrl: '/testpage',
    DELAYED_MODAL_DISPLAY_MODE,
  });
  await delay(900);
  expect(document.querySelector(hash)).to.not.exist;
  const modalStylesLink2 = window.document.head.querySelector('link[href="undefined/blocks/modal/modal.css"]');
  modalStylesLink2.remove();
  a.remove();
});
