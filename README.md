# Next.js Localization Example

This repository contains a simple localization example created using Next.js 14 and next-intl. The project follows an app route structure. Using server components as much as possible is a good choice in localization processes. Hovever, If your project heavily relies on client components, you can use NextIntlClientProvider. NextIntlClientProvider enables localization operations to be performed across all components (regardless of whether they are server or client components).


`NextIntlClientProvider` within `[locale]/layout.tsx`



```tsx
<html lang={locale}>
  <body className={inter.className}>
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 h-full w-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </NextIntlClientProvider>
  </body>
</html>
```

But, this approach may not always be desirable. For real projects, you might choose not to use this method due to performance considerations and various other reasons. You can find other methods and more detailed information [here](https://next-intl-docs.vercel.app/docs/environments/server-client-components#missing-context).

Happy coding!