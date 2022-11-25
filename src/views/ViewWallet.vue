<template>
  <div class="wallet">
    <div class="container wallet-inner">
      <div class="wallet-left">
        <h2 class="wallet-title">Кошелёк</h2>
        <div class="wallet-output">
          <span class="wallet-output-title">1305 кр</span>
          <button class="wallet-output-button">Вывести</button>
        </div>
      </div>
      <div class="wallet-right">
        <h2 class="wallet-title">История платежей</h2>
        <div class="wallet-pay">
          <div class="wallet-pay-card" v-for="(item, index) in 10" :key="index">
            <p class="wallet-pay-text">
              <span class="wallet-pay-text-main">Рецензия для</span>
              <span class="wallet-pay-text-bold">@electricfuneralrecords</span>
            </p>
            <span class="wallet-pay-sum">+ 15кр</span>
          </div>
          <div class="wallet-data">
            <div class="pages">
              <div class="pages-quantity">
                <span class="pages-quantity-num">10</span>
                <base-icon name="chevron-small" />
              </div>
              <div class="pages-data">
                <p class="pages-data-text">Количество на странице</p>
              </div>
            </div>
            <div class="pagination">
              <div class="pagination-arrow">
                <base-icon name="chevron-large" />
              </div>
              <div class="pagination-num">
                <span class="pagination-num-text">1</span>
              </div>
              <div class="pagination-num">
                <span class="pagination-num-text">2</span>
              </div>
              <div class="pagination-num">
                <span class="pagination-num-text">...</span>
              </div>
              <div class="pagination-num">
                <span class="pagination-num-text">5</span>
              </div>
              <div class="pagination-arrow">
                <base-icon name="chevron-large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from "@/components/base/BaseIcon.vue";

export default {
  components: {
    BaseIcon,
  },
};
</script>

<style lang="sass" scoped>
.wallet
  padding-top: 80px
  padding-bottom: 100px
  +xs()
    padding-top: 40px
    padding-bottom: 80px
  &-left
    width: 33%
    +lg()
      width: fit-content
    +xs()
      width: 100%
  &-right
    width: 66%
    +lg()
      width: fit-content
    +xs()
      width: 100%
  &-inner
    display: flex
    align-items: flex-start
    gap: 30px
    +lg()
      flex-direction: column
    +xs()
      gap: 80px
  &-title
    font-size: 32px
    line-height: 39px
    letter-spacing: -4%
    font-weight: 600
    margin-bottom: 40px
    +xs()
      font-size: 25px
      line-height: 30px
      margin-bottom: 20px
  &-output
    background-color: #fff
    border: 1px solid #E7EBFF
    border-radius: 15px
    padding: 25px 30px
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    +xs()
      flex-direction: column
      gap: 15px
      align-items: flex-start
      padding: 20px
    &-title
      font-size: 24px
      line-height: 29px
      letter-spacing: -4%
      font-weight: 600
      +xs()
        font-size: 20px
        line-height: 24px
    &-button
      background-color: #FF6C6C
      border-radius: 10px
      padding: 20px 57px
      color: #fff
      font-size: 16px
      line-height: 19px
      border: none
      outline: none
      cursor: pointer
      +xs()
        font-size: 15px
        line-height: 18px
        padding: 21px 10px
        flex-grow: 1
        width: 100%
  &-data
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    flex-wrap: wrap
    margin-top: 30px
    +xs()
      margin-top: 15px
      flex-direction: column-reverse
      gap: 10px
  &-pay
    display: flex
    flex-direction: column
    gap: 10px
    +xs()
      gap: 5px
    &-card
      background-color: #fff
      border: 1px solid #E7EBFF
      border-radius: 15px
      padding: 40px 30px
      display: flex
      align-items: center
      justify-content: space-between
      gap: 10px
      +xs()
        padding: 20px
    &-text
      font-size: 24px
      line-height: 29px
      +xs()
        display: inline-block
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      &-main
        +xs()
          display: none
      &-bold
        display: inline-block
        font-weight: 600
        +xs()
          font-size: 16px
          line-height: 150%
          width: 100%
          text-overflow: ellipsis
          white-space: nowrap
          overflow: hidden
    &-sum
      font-size: 24px
      line-height: 29px
      color: #94C266
      font-weight: 600
      white-space: nowrap
      flex-shrink: 0
      +xs()
        font-size: 16px
        line-height: 19px

.pages
  border: 1px solid #D1D5EF
  background-color: #fff
  border-radius: 10px
  display: inline-flex
  height: 60px
  +xs()
    width: 100%
    height: 52px
  &-quantity
    display: flex
    align-items: center
    justify-content: center
    width: 111px
    cursor: pointer
    border-right: 1px solid #D1D5EF
    &-num
      font-size: 14px
      line-height: 17px
      font-weight: 600
  &-data
    width: 219px
    display: flex
    align-items: center
    justify-content: center
    +xs()
      flex-grow: 1
      width: 100%
    &-text
      font-size: 14px
      line-height: 17px
      color: #777B9E

.pagination
  border: 1px solid #D1D5EF
  border-radius: 10px
  background-color: #fff
  height: 60px
  display: flex
  overflow: hidden
  +xs()
    height: 52px
    width: 100%
  > *:not(:last-child)
    border-right: 1px solid #D1D5EF
  &-arrow
    width: 108px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    +xs()
      width: 100%
      flex-grow: 1
    &:last-child svg
      transform: rotate(-180deg)
    &:hover
      background-color: #D1D5EF
  &-num
    width: 60px
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    +xs()
      aspect-ratio: 1 / 1
      width: auto
    &:hover,
    &:active
      background-color: #EEF0FD
      .pagination-num-text
        color: #2A2A2D
    &-text
      font-size: 14px
      line-height: 17px
      color: #777B9E
      font-weight: 600
</style>