import { VNode } from 'vue'
import { Component } from 'vue-property-decorator'
import VsIconsArrow from '../../../icons/arrow'
import VsComponent from '../../../mixins/component'

function isElementInViewport(el: any) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

@Component
export default class VsCardGroup extends VsComponent {
  public render(h: any): VNode {
    const arrowPrev = h('button', {
      staticClass: 'vs-card__group-prev',
      on: {
        click: (evt: any) => {
          console.log('paso <')
          const cardsI: any = this.$refs.cards
          // console.dir(cardsI)
          /* const childrenI: any[] = Array.prototype.slice.call(cardsI.children).reverse()
          let isChanged = false
          let signedCard: any = null
          childrenI.forEach((el) => {
            if (!isChanged) {
              if (isElementInViewport(el)) {
                isChanged = true
              }
            } else {
              if (!isElementInViewport(el) && signedCard == null) {
                signedCard = el
              }
            }
          }) */
          cardsI.scrollTo(cardsI.scrollLeft - cardsI.clientWidth, 0)
          // cardsI.scrollRight = window.innerWidth - signedCard.offsetLeft - signedCard.offsetWidth
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const arrowNext = h('button', {
      staticClass: 'vs-card__group-next',
      on: {
        click: (evt: any) => {
          console.log('paso >')
          const cardsI: any = this.$refs.cards
          // console.dir(cardsI)
          const childrenI: any[] = Array.prototype.slice.call(cardsI.children);
          let isChanged = false
          let signedCard: any = null
          childrenI.forEach((el) => {
            if (!isChanged) {
              if (isElementInViewport(el)) {
                isChanged = true
              }
            } else {
              if (!isElementInViewport(el) && signedCard == null) {
                signedCard = el
              }
            }
          })
          // cardsI.scrollTo(cardsI.scrollLeft + cardsI.clientWidth, 0)
          cardsI.scrollLeft = signedCard.offsetLeft
        }
      }
    }, [
      h(VsIconsArrow)
    ])

    const space = h('div', {
      staticClass: 'vs-card__group-space',
    })

    const cards = h('div', {
      staticClass: 'vs-card__group-cards',
      ref: 'cards'
    }, [
      this.$slots.default,
      space
    ])

    return h('div', {
      staticClass: 'vs-card__group',
    }, [
      arrowPrev,
      cards,
      arrowNext
    ])
  }
}
