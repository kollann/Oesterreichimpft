<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <title>Test View</title>
</head>
<body>
<ul>
    @foreach($books as $b)
        <li>{{ $b->isbn }} {{ $b->title }}</li>
    @endforeach
</ul>
</body>
</html>
