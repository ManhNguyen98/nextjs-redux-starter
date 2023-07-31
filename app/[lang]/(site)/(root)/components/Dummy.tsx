'use client'
import { useTranslation } from '@/app/i18n/client'
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks'
import { dummyActions } from '../../slices'

const Dummy = () => {
  const { t } = useTranslation()
  const count = useAppSelector((state) => state.dummyReducer.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>{t('test')}</h1>
      <div className="flex flex-col gap-4 items-center border px-6 py-3 rounded-md mt-5 ml-2">
        <h4>{count}</h4>
        <div className="flex gap-3">
        <button
          className="border box-border px-2 text-[14px] flex items-center justify-center"
          onClick={() => dispatch(dummyActions.reset())}
        >
          reset
        </button>
        <button
          className="border box-border px-2 text-[14px] flex items-center justify-center"
          onClick={() => dispatch(dummyActions.decrement())}
        >
          decrement
        </button>
        <button
          className="border box-border px-2 text-[14px] flex items-center justify-center"
          onClick={() => dispatch(dummyActions.increment())}
        >
          increment
        </button>
        </div>
      </div>
    </div>
  )
}

export default Dummy
