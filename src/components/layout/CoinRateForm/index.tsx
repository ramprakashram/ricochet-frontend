import { TextInput } from 'components/common/TextInput';
import React, { ChangeEvent, FC } from 'react';
import { useTranslation } from 'i18n';
import ReactTooltip from 'react-tooltip';
import ButtonNew from '../../common/ButtonNew';
import { Coin } from '../../../constants/coins';
import styles from './styles.module.scss';

interface IProps {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickStart: () => void;
  onClickStop: () => void;
  coin: Coin;
  isLoading?: boolean;
  isReadOnly?: boolean;
  personalFlow: string;
}

export const CoinRateForm: FC<IProps> = ({
  value,
  onChange,
  onClickStart,
  onClickStop,
  placeholder,
  coin,
  isLoading,
  isReadOnly,
  personalFlow,
}) => {
  const { t } = useTranslation();
  // Security Deposit is 4 hours worth of stream, so (4*60*60)/(30*24*60*60) = 1/180
  return (
    <div className={styles.input_container}>
      <div className={styles.input_wrap}>
        <TextInput
          value={value}
          className={styles.input}
          onChange={onChange}
          containerClassName={styles.container_input}
          placeholder={placeholder}
          right={<div className={styles.right}>{`${coin}x/mo.`}</div>}
          type="number"
        />
      </div>
      <div className={styles.buttons}>
        <div className={styles.start_wrap}>
          <ButtonNew
            loaderColor="white"
            color="primary"
            onClick={onClickStart}
            className={styles.start}
            disabled={isReadOnly || isLoading || !value}
            isLoading={isLoading}
            data-tip
            data-for="depositTooltip"
          >
            {t('Start')}
            /
            {t('Edit')}
          </ButtonNew>
        </div>
        <div className={styles.stop_wrap}>
          {parseFloat(personalFlow) > 0 && (
            <ButtonNew
              loaderColor="#363B55"
              color="secondary"
              onClick={onClickStop}
              className={styles.stop}
              disabled={isReadOnly || isLoading}
              isLoading={isLoading}
            >
              {t('Stop')}
            </ButtonNew>
          )}
        </div>
        <div style={{ flexBasis: '100%', height: '0' }}> </div>

        {parseFloat(value) > 0 ? (
          <ReactTooltip
            id="depositTooltip"
            place="right"
            effect="solid"
            multiline
            className={styles.depositTooltip}
          >
            <span className={styles.depositTooltip_span}>
              {t('Starting this stream will take a security deposit of')}
              <span style={{ fontWeight: 700 }}>
                {` ${(parseFloat(value) / 180.0).toFixed(6)} ${coin} `}
              </span>
              {t('from your balance.')}
              {t('The Deposit will be refunded in full when you close the stream or lost if your balance hits zero with the stream still open.')}
            </span>
          </ReactTooltip>
        ) : null}
        <div />
      </div>
    </div>
  );
};
