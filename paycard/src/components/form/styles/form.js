import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 570px;
  margin: auto;
  width: 100%;
`;

export const Inner = styled.div`
  background: white;
  border-radius: 10px;
  padding: 35px;
  padding-top: 180px;
  box-shadow: 0 30px 60px rgba(90, 116, 148, 0.4);
`;

export const InputConatiner = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #1a3b5d;
  display: block;
  user-select: none;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  box-shadow: 0;
  font-size: 18px;
  padding: 5px 15px;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    border-color: #3d9cff;
  }

  &:focus {
    box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
  }
`;

export const RowConatiner = styled.div`
  display: flex;
`;

export const ColConatiner = styled.div`
  flex: auto;
`;

export const GroupContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  border: 1px solid #ced6e0;
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 15px;
  color: #1a3b5d;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.3s ease-in-out;
  padding-right: 30px;
  flex: 1;
  margin-right: 15px;

  // 向下的箭头
  -webkit-appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC");
  background-size: 12px;
  background-position: 90% center;
  background-repeat: no-repeat;

  &:hover,
  &:focus {
    border-color: #3d9cff;
  }

  &:focus {
    box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
  }
`;

export const CardWrapper = styled.div``;
