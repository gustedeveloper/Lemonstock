// src/pods/image-category/hooks/useColumnLayout.ts
import { useState, useEffect, useMemo } from "react";
import { PhotoVM } from "../../../core/model";

interface ColumnData {
  images: PhotoVM[]; // Array de imágenes de esta columna
  height: number; // Altura acumulada de esta columna
}

export const useColumnLayout = (pictures: PhotoVM[], columnCount: number) => {
  const [columns, setColumns] = useState<ColumnData[]>([]);

  // Función para estimar la altura de una imagen basada en su aspect ratio
  const estimateImageHeight = (photo: PhotoVM, containerWidth: number) => {
    const aspectRatio = photo.width / photo.height; // Proporción original
    const imageWidth = containerWidth; // Ancho de la columna
    return imageWidth / aspectRatio; // Altura calculada
  };

  // Función para encontrar la columna más corta
  const getShortestColumnIndex = (cols: ColumnData[]) => {
    return cols.reduce(
      (shortestIndex, col, index) =>
        col.height < cols[shortestIndex].height ? index : shortestIndex,
      0
    );
  };

  // Distribución de imágenes en columnas
  const distributeImages = useMemo(() => {
    // Inicializar columnas vacías
    const newColumns: ColumnData[] = Array.from(
      { length: columnCount },
      () => ({
        images: [],
        height: 0,
      })
    );

    // Estimar ancho de columna (asumiendo gap de 10px)
    const containerWidth = 300; // Ancho estimado por columna
    const gap = 10;
    const columnWidth =
      (containerWidth - gap * (columnCount - 1)) / columnCount;

    // Distribuir cada imagen en la columna más corta
    pictures.forEach((picture) => {
      const shortestIndex = getShortestColumnIndex(newColumns);
      const estimatedHeight = estimateImageHeight(picture, columnWidth);

      newColumns[shortestIndex].images.push(picture);
      newColumns[shortestIndex].height += estimatedHeight + gap; // +gap para el spacing
    });

    return newColumns;
  }, [pictures, columnCount]);

  useEffect(() => {
    setColumns(distributeImages);
  }, [distributeImages]);

  return columns;
};
