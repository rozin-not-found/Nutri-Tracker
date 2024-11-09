import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/shops/shopsSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

import { hasPermission } from '../../helpers/userPermissions';

const ShopsView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { shops } = useAppSelector((state) => state.shops);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View shops')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View shops')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>ShopName</p>
            <p>{shops?.name}</p>
          </div>

          <FormField label='Multi Text' hasTextareaHeight>
            <textarea className={'w-full'} disabled value={shops?.address} />
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>shop</p>

            <p>{shops?.shop?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Menu_items Shop</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>ItemName</th>

                      <th>UnitPrice</th>

                      <th>Calories</th>

                      <th>Protein</th>

                      <th>Fats</th>

                      <th>Carbohydrates</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shops.menu_items_shop &&
                      Array.isArray(shops.menu_items_shop) &&
                      shops.menu_items_shop.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/menu_items/menu_items-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='unit_price'>{item.unit_price}</td>

                          <td data-label='calories'>{item.calories}</td>

                          <td data-label='protein'>{item.protein}</td>

                          <td data-label='fats'>{item.fats}</td>

                          <td data-label='carbohydrates'>
                            {item.carbohydrates}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!shops?.menu_items_shop?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Orders Shop</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>OrderDate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shops.orders_shop &&
                      Array.isArray(shops.orders_shop) &&
                      shops.orders_shop.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/orders/orders-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='order_date'>
                            {dataFormatter.dateTimeFormatter(item.order_date)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!shops?.orders_shop?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/shops/shops-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

ShopsView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_SHOPS'}>{page}</LayoutAuthenticated>
  );
};

export default ShopsView;
