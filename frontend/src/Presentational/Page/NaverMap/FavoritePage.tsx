/* eslint-disable no-undef */
import React, { useEffect, useState, useRef } from 'react';
import { BsBookmarkStar } from 'react-icons/bs';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import * as FavoriteStyle from './FavoritePage_Style';
import * as FavoriteAPI from '../../../Action/Modules/NaverMap/Favorite';
import PagenationComponent from '../../Components/NaverMap/SideBar/PagenationComponent';

type propsType = {
  map: naver.maps.Map | null;
};

function FavoritePage(props: propsType) {
  const { map } = props;
  const [favoriteList, setFavoriteList] = useState<null | FavoriteAPI.favoriteResultType>(null);
  // const [markerObject, setMarkerObject] = useState<null | naver.maps.Marker[]>(null);
  const markerObject = useRef<null | naver.maps.Marker[]>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [forceRerender, setForceRerender] = useState(1);

  async function updateData(): Promise<FavoriteAPI.favoriteResultType | null> {
    const result = await FavoriteAPI.GetfavoriteData(currentPage - 1);
    setFavoriteList(result);
    return result;
  }

  async function updateMarker(
    data: Promise<FavoriteAPI.favoriteResultType | null>,
  ): Promise<naver.maps.Marker[] | null> {
    if (!map) return null;
    // if (markerObject) {
    //   FavoriteAPI.clearMarker(markerObject);
    // }
    if (markerObject.current) {
      FavoriteAPI.clearMarker(markerObject.current);
    }
    const convertData = await data;
    if (!convertData) return null;
    const returnData = await FavoriteAPI.MakeMarker(map, convertData);
    // setMarkerObject(returnData);
    markerObject.current = returnData;
    return returnData;
  }

  const init = () => {
    updateData();
    const blank = updateMarker(updateData());
  };

  useEffect(() => {
    // updateData();
    // const blank = updateMarker(updateData());
    init();
    return () => {
      // if (markerObject) {
      //   FavoriteAPI.clearMarker(markerObject);
      // }
      if (markerObject.current) {
        FavoriteAPI.clearMarker(markerObject.current);
      }
    };
  }, [currentPage, forceRerender]);

  function moveTo(lat: number, lng: number) {
    map?.setZoom(15);
    map?.setCenter(new naver.maps.LatLng(lat, lng));
  }

  const deleteFavorite = (id: number) => {
    Swal.fire({
      title: '즐겨찾기 삭제',
      icon: 'question',
      text: '즐겨찾기를 삭제 하시겠습니까?',
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: '취소',
      confirmButtonText: '확인',
    }).then((result) => {
      if (result.isConfirmed) {
        FavoriteAPI.DeleteFavorite(id);
        setForceRerender(forceRerender + 1);
      }
    });
  };

  // 12개 까지 아이템 만들 수 있음.

  return (
    <FavoriteStyle.FavoriteWrapper>
      <FavoriteStyle.FavoriteHeader>저장된 위치 - {favoriteList?.totalElements}</FavoriteStyle.FavoriteHeader>
      <FavoriteStyle.FavoriteListWrapper>
        {favoriteList
          ? favoriteList.content.map((item, idx) => {
              return (
                <FavoriteStyle.FavoriteItemWrapper
                  key={item.name + item.lat}
                  onMouseEnter={() => {
                    if (!markerObject.current) return;
                    FavoriteAPI.sizeUp(markerObject.current, idx);
                  }}
                  onMouseLeave={() => {
                    if (!markerObject.current) return;
                    FavoriteAPI.sizeReturn(markerObject.current, idx);
                  }}
                >
                  <FavoriteStyle.FavoriteItemFrontWrapper onClick={() => moveTo(item.lat, item.lng)}>
                    <BsBookmarkStar size={25} className="icon iconFront" />
                    <FavoriteStyle.FavoriteItemText>{item.name}</FavoriteStyle.FavoriteItemText>
                  </FavoriteStyle.FavoriteItemFrontWrapper>
                  <RiDeleteBin2Line size={25} className="icon iconBack" onClick={() => deleteFavorite(item.id)} />
                </FavoriteStyle.FavoriteItemWrapper>
              );
            })
          : null}
      </FavoriteStyle.FavoriteListWrapper>
      <FavoriteStyle.FavoriteBottomWrapper>
        <PagenationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPage={favoriteList?.totalPages}
          map={map}
          text="즐겨찾기 추가"
          updateHandler={init}
          type="favorite"
        />
      </FavoriteStyle.FavoriteBottomWrapper>
    </FavoriteStyle.FavoriteWrapper>
  );
}

export default FavoritePage;
