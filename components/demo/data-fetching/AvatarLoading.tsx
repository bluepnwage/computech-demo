export function AvatarLoading() {
  return (
    <figure>
      <div style={{ width: 50, height: 50 }} className="grayscale mb-2  animate-pulse bg-red-500 rounded-full " />
      <figcaption>
        <p className="animate-pulse h-4 grayscale rounded-lg bg-red-500 w-16"></p>
      </figcaption>
    </figure>
  );
}
