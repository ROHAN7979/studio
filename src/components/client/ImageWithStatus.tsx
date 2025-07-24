'use client';

import { generateImage } from '@/ai/flows/generate-image-flow';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageWithStatusProps {
  alt: string;
  imageHint: string;
  fallbackSrc: string;
}

export function ImageWithStatus({ alt, imageHint, fallbackSrc }: ImageWithStatusProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const cacheKey = `ai-image-cache-${imageHint}`;

    const fetchImage = async () => {
      // Check cache first
      try {
        const cachedImage = localStorage.getItem(cacheKey);
        if (cachedImage) {
          if (isMounted) {
            setImageUrl(cachedImage);
            setIsLoading(false);
          }
          return;
        }
      } catch (e) {
        console.warn("Could not access localStorage for caching.", e)
      }


      // If not in cache, generate it
      setIsLoading(true);
      setError(null);
      try {
        const result = await generateImage({ prompt: imageHint });
        if (isMounted) {
            setImageUrl(result.imageUrl);
            // Save to cache
            try {
                localStorage.setItem(cacheKey, result.imageUrl);
            } catch (e) {
                console.warn("Could not save image to localStorage.", e);
            }
        }
      } catch (err) {
        console.error(`Failed to generate image for hint: ${imageHint}`, err);
        if (isMounted) {
            setError('Failed to load image.');
        }
      } finally {
        if (isMounted) {
            setIsLoading(false);
        }
      }
    };

    fetchImage();
    
    return () => {
        isMounted = false;
    }
  }, [imageHint]);

  if (isLoading) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-muted animate-pulse">
            <p className="text-muted-foreground text-sm">Generating AI Image...</p>
        </div>
    );
  }

  if (error || !imageUrl) {
    return <Image src={fallbackSrc} alt={alt} fill className="object-cover" />;
  }

  return <Image src={imageUrl} alt={alt} fill className="object-cover" />;
}
