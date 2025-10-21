'use client';

import { useState } from 'react';
import { css } from 'ds/css';
import { grid, stack } from 'ds/patterns';
import { useTranslations } from 'next-intl';
import { amenities } from '../_data/amenities';

export const AmenitiesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('amenities');
  const amenityList = t.raw('list') as Record<string, string>[];

  return (
    <li className={stack({ gap: 's' })}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: 'xs',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          textStyle: 'base',
          fontSize: '1',
          lineHeight: 'tight',
          color: 'text2',
          _hover: {
            color: 'slate9',
          },
        })}
      >
        <span
          className={css({
            transition: 'transform 0.2s ease',
            display: 'inline-block',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          })}
        >
          ▸
        </span>
        {t('title')}
      </button>

      {isOpen && (
        <ul
          className={grid({
            gap: 's',
            columns: { base: 1, bp1: 2 },
            paddingLeft: 'm',
          })}
        >
          {amenityList.map((amenityItem, index) => {
            const amenityData = amenities.find((a) => a.id === amenityItem.id);
            return (
              <li
                key={index}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'xs',
                  textStyle: 'base',
                  fontSize: '1',
                  listStyle: 'none',
                  color: 'text2',
                })}
              >
                {amenityData && (
                  <span
                    className={css({
                      display: 'inline-flex',
                      flexShrink: 0,
                    })}
                    dangerouslySetInnerHTML={{ __html: amenityData.icon }}
                  />
                )}
                {amenityItem.name}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
