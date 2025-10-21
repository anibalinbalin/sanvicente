'use client';

import { useState } from 'react';
import { css } from 'ds/css';
import { grid, stack } from 'ds/patterns';
import { useTranslations } from 'next-intl';

export const AmenitiesAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('amenities');

  const amenities = [
    'Barbecue utensils',
    'BBQ grill',
    'Beach access',
    'Bed linens',
    'Bidet',
    'Blender',
    'Books and reading material',
    'Clothing storage',
    'Cooking basics',
    'Crib',
    'Dedicated workspace',
    'Dining table',
    'Dishes and silverware',
    'Drying rack for clothing',
    'Ethernet connection',
    'Exercise equipment',
    'Extra pillows and blankets',
    'Fire pit',
    'Free parking on premises',
    'Freezer',
    'Gym',
    'Hair dryer',
    'Hangers',
    'Heating',
    'High chair',
    'Hot water',
    'Hot water kettle',
    'Indoor fireplace',
    'Iron',
    'Kitchen',
    'Kitchenette',
    'Laundromat nearby',
    'Mosquito net',
    'Outdoor dining area',
    'Outdoor furniture',
    'Outdoor kitchen',
    'Outdoor playground',
    'Oven',
    'Refrigerator',
    'Room-darkening shades',
    'Shower gel',
    'TV',
    'Washer',
    'Wifi',
    'Wine glasses'
  ];

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
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className={css({
                textStyle: 'base',
                fontSize: '1',
                listStyle: 'none',
                color: 'text2',
              })}
            >
              • {amenity}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
